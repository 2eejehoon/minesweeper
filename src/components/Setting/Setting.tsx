import { memo } from "react";
import { Wrapper } from "./SettingStyle";
import CustomSetting from "../CustomSetting/CustomSetting";
import DifficultySetting from "../DifficultySetting/DifficultySetting";

function Setting() {
  return (
    <Wrapper>
      <CustomSetting />
      <DifficultySetting />
    </Wrapper>
  );
}

export default memo(Setting);
