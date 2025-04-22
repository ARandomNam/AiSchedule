import React from "react";
import { Input, Form } from "antd";
import { useTranslation } from "react-i18next";

interface IdentitySelectProps {
  onIdentityChange: (identity: string) => void;
}

const IdentitySelect: React.FC<IdentitySelectProps> = ({
  onIdentityChange,
}) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={t("identity.label")}
      name="identity"
      rules={[{ required: true, message: t("identity.required") }]}
    >
      <Input
        placeholder={t("identity.placeholder")}
        onChange={(e) => onIdentityChange(e.target.value)}
      />
    </Form.Item>
  );
};

export default IdentitySelect;
