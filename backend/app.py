from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

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
        
        # 构建更清晰的提示词
        prompt = f"""你是一名时间管理专家。请根据以下信息生成一个每周时间表，以CSV格式返回。
格式要求：
1. 第一行是表头：时间段,活动名称,重复日期
2. 时间段格式：HH:mm-HH:mm（24小时制）
3. 重复日期用数字表示：1-5表示周一到周五，6-7表示周末
4. 请确保时间安排合理，不会冲突
5. 只返回CSV格式数据，不要包含任何其他说明文字
6. 对于重复的活动，请确保总时长符合用户要求，不要重复安排相同活动

示例格式：
时间段,活动名称,重复日期
09:00-10:30,晨会,1-5
12:00-13:00,午餐,1-5
14:00-16:00,学习,6-7

用户信息：
{userInput}

请生成时间表："""

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