import React from "react";
import { Form, Input, TimePicker, Checkbox, Button } from "antd";

interface ActivityInputProps {
  onSubmit: (values: any) => void;
}

const ActivityInput: React.FC<ActivityInputProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // 处理时间范围
    const timeRange = values.timeRange;
    const formattedValues = {
      ...values,
      timeRange: timeRange
        ? [timeRange[0].format("HH:mm"), timeRange[1].format("HH:mm")]
        : undefined,
    };
    onSubmit(formattedValues);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        days: [],
      }}
    >
      <Form.Item
        label="活动名称"
        name="name"
        rules={[{ required: true, message: "请输入活动名称" }]}
      >
        <Input placeholder="例如：学习、工作、运动等" />
      </Form.Item>

      <Form.Item
        label="活动时长（小时）"
        name="duration"
        rules={[{ required: true, message: "请输入活动时长" }]}
      >
        <Input type="number" min={0.5} step={0.5} />
      </Form.Item>

      <Form.Item label="特定时间段" name="timeRange">
        <TimePicker.RangePicker format="HH:mm" />
      </Form.Item>

      <Form.Item label="重复日期" name="days">
        <Checkbox.Group>
          <Checkbox value="monday">周一</Checkbox>
          <Checkbox value="tuesday">周二</Checkbox>
          <Checkbox value="wednesday">周三</Checkbox>
          <Checkbox value="thursday">周四</Checkbox>
          <Checkbox value="friday">周五</Checkbox>
          <Checkbox value="saturday">周六</Checkbox>
          <Checkbox value="sunday">周日</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加活动
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ActivityInput;
