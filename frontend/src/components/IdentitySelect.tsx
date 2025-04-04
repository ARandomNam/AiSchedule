import React from "react";
import { Input, Form } from "antd";

interface IdentitySelectProps {
  onIdentityChange: (identity: string) => void;
}

const IdentitySelect: React.FC<IdentitySelectProps> = ({
  onIdentityChange,
}) => {
  return (
    <Form.Item
      label="您的身份"
      name="identity"
      rules={[{ required: true, message: "请输入您的身份" }]}
    >
      <Input
        placeholder="例如：学生、前端实习生、自由职业者等"
        onChange={(e) => onIdentityChange(e.target.value)}
      />
    </Form.Item>
  );
};

export default IdentitySelect;
