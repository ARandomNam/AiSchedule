from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests
import io

load_dotenv()

app = Flask(__name__)

# 最基本的CORS配置
CORS(app)

# 设置默认端口为5001
os.environ['FLASK_RUN_PORT'] = '5001'

DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY')
DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"

@app.route('/api/generate-schedule', methods=['POST', 'OPTIONS'])
def generate_schedule():
    if request.method == 'OPTIONS':
        return '', 200

    try:
        # 验证API key是否正确加载
        api_key = os.getenv('DEEPSEEK_API_KEY')
        if not api_key or api_key == "your_deepseek_api_key_here":
            print("Error: DeepSeek API key not properly configured")
            return jsonify({"error": "API key not configured"}), 500
        print("API key loaded successfully (first 5 chars):", api_key[:5] + "*****")

        userInput = request.json.get("userInput", "")
        
        # 加载提示词模板
        try:
            with open('prompt_templates/system_instructions.md', 'r', encoding='utf-8') as f:
                system_instructions = f.read()
            with open('prompt_templates/user_template.md', 'r', encoding='utf-8') as f:
                user_template = f.read()
        except Exception as e:
            print(f"模板加载失败: {str(e)}")
            return jsonify({"error": "系统配置错误"}), 500

        # 构建动态提示词
        prompt = f"""{system_instructions}

{user_template.replace('${userInput}', userInput)}"""

        # 添加调试日志
        print("生成的完整提示词：\n", prompt[:500] + "..." if len(prompt) > 500 else prompt)

        headers = {
            "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "deepseek-chat",
            "messages": [
                {"role": "system", "content": "你是一个专业的时间管理助手，擅长安排合理的时间表。"},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7,
        }

        response = requests.post(DEEPSEEK_API_URL, headers=headers, json=payload)
        
        print("DeepSeek API response status:", response.status_code)  # 添加API响应状态日志
        print("DeepSeek API response:", response.text)  # 添加API响应内容日志
        
        if response.status_code == 403:
            return jsonify({
                "error": "API密钥无效或已过期",
                "status": "error"
            }), 403
            
        response.raise_for_status()
        
        ai_response = response.json()
        schedule = ai_response['choices'][0]['message']['content'].strip()
        
        return jsonify({
            "schedule": schedule,
            "status": "success"
        })

    except requests.exceptions.RequestException as e:
        print("Error in generate_schedule:", str(e))  # 添加异常日志
        return jsonify({
            "error": f"API请求失败: {str(e)}",
            "status": "error"
        }), 500
    except Exception as e:
        print("Error in generate_schedule:", str(e))  # 添加异常日志
        return jsonify({
            "error": str(e),
            "status": "error"
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)