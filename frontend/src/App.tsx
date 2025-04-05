import React, { useState, lazy } from "react";
import { Button, Typography, theme, Form, message } from "antd";
import WeekView from "./components/WeekView";
import IdentitySelect from "./components/IdentitySelect";
import DownloadButton from "./components/DownloadButton";
import {
  StyledLayout,
  StyledHeader,
  StyledMainLayout,
  StyledSider,
  StyledContent,
  StyledCard,
} from "./styles/Layout.styles";

const { Title } = Typography;

const ActivityInput = lazy(() => import("./components/ActivityInput"));
const ActivityList = lazy(() => import("./components/ActivityList"));

interface Activity {
  key: string;
  name: string;
  duration: number;
  timeRange?: [string, string];
  days: string[];
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [identity, setIdentity] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [schedule, setSchedule] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = theme.useToken();

  const handleIdentityChange = (value: string) => {
    setIdentity(value);
  };

  const handleActivitySubmit = (values: any) => {
    const newActivity: Activity = {
      key: Date.now().toString(),
      ...values,
    };
    setActivities([...activities, newActivity]);
    form.resetFields();
  };

  const handleActivityDelete = (key: string) => {
    setActivities(activities.filter((activity) => activity.key !== key));
  };

  const handleGenerateSchedule = async () => {
    if (!identity) {
      message.error("请先选择您的身份");
      return;
    }

    if (activities.length === 0) {
      message.error("请至少添加一个活动");
      return;
    }

    setLoading(true);
    try {
      const userInput = `你是一名时间管理专家。请根据以下信息生成一个每周时间表，以CSV格式返回。
格式要求：
1. 第一行是表头：时间段,活动名称,重复日期
2. 时间段格式：HH:mm-HH:mm（24小时制）
3. 重复日期用数字表示：1-5表示周一到周五，6-7表示周末
4. 请确保时间安排合理，不会冲突
5. 只返回CSV格式数据，不要包含任何其他说明文字

示例格式：
时间段,活动名称,重复日期
09:00-10:30,晨会,1-5
12:00-13:00,午餐,1-5
14:00-16:00,学习,6-7

用户信息：
- 身份：${identity}
- 活动安排：${activities
        .map(
          (activity) =>
            `${activity.name}（${activity.duration}小时，${
              activity.timeRange
                ? `在${activity.timeRange[0]}-${activity.timeRange[1]}之间`
                : "时间灵活"
            }，在${activity.days.join("、")}进行）`
        )
        .join("；")}

请生成时间表：`;

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/generate-schedule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("原始数据:", data);
      console.log("CSV内容:", data.schedule);
      setSchedule(data.schedule);
    } catch (error) {
      console.error("Error:", error);
      message.error("生成时间表失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <Title level={3} style={{ margin: 0, color: token.colorPrimary }}>
          AI 智能时间表生成器
        </Title>
      </StyledHeader>
      <StyledMainLayout>
        <StyledSider width={500}>
          <StyledCard title="基本信息" className="info-card">
            <Form form={form}>
              <IdentitySelect onIdentityChange={handleIdentityChange} />
            </Form>
          </StyledCard>
          <StyledCard
            title="活动管理"
            className="activity-card"
            extra={schedule && <DownloadButton schedule={schedule} />}
          >
            <React.Suspense fallback={<div>Loading...</div>}>
              <ActivityInput onSubmit={handleActivitySubmit} />
            </React.Suspense>
            <div
              style={{
                margin: "16px 0",
                maxHeight: "calc(100vh - 450px)",
                overflowY: "auto",
              }}
            >
              <React.Suspense fallback={<div>Loading...</div>}>
                <ActivityList
                  activities={activities}
                  onDelete={handleActivityDelete}
                />
              </React.Suspense>
            </div>
            <Button
              type="primary"
              onClick={handleGenerateSchedule}
              loading={loading}
              block
              style={{ marginTop: 16 }}
            >
              {loading ? "生成中..." : "生成时间表"}
            </Button>
          </StyledCard>
        </StyledSider>
        <StyledContent>
          <WeekView schedule={schedule} />
        </StyledContent>
      </StyledMainLayout>
    </StyledLayout>
  );
};

export default App;
