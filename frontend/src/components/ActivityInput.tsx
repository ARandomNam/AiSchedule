import React from "react";
import { Form, Input, TimePicker, Checkbox, Button } from "antd";
import { useTranslation } from "react-i18next";

interface ActivityInputProps {
  onSubmit: (values: any) => void;
}

const ActivityInput: React.FC<ActivityInputProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

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
        label={t("activity.name")}
        name="name"
        rules={[{ required: true, message: t("activity.nameRequired") }]}
      >
        <Input placeholder="例如：学习、工作、运动等" />
      </Form.Item>

      <Form.Item
        label={t("activity.duration")}
        name="duration"
        rules={[{ required: true, message: t("activity.durationRequired") }]}
      >
        <Input type="number" min={0.5} step={0.5} />
      </Form.Item>

      <Form.Item label={t("activity.timeRange")} name="timeRange">
        <TimePicker.RangePicker format="HH:mm" />
      </Form.Item>

      <Form.Item label={t("activity.days")} name="days">
        <Checkbox.Group>
          <Checkbox value="monday">{t("weekdays.monday")}</Checkbox>
          <Checkbox value="tuesday">{t("weekdays.tuesday")}</Checkbox>
          <Checkbox value="wednesday">{t("weekdays.wednesday")}</Checkbox>
          <Checkbox value="thursday">{t("weekdays.thursday")}</Checkbox>
          <Checkbox value="friday">{t("weekdays.friday")}</Checkbox>
          <Checkbox value="saturday">{t("weekdays.saturday")}</Checkbox>
          <Checkbox value="sunday">{t("weekdays.sunday")}</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t("activity.add")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ActivityInput;
