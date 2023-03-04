import { memo, useCallback, useState } from "react";
import { Wrapper, StyledButton } from "./SettingStyle";
import CustomSetting from "../CustomSetting/CustomSetting";
import DifficultySetting from "../DifficultySetting/DifficultySetting";

function Setting() {
  const [isSetting, setIsSetting] = useState(false);

  const handleClick = useCallback(() => setIsSetting((prev) => !prev), []);

  return (
    <Wrapper>
      <StyledButton onClick={handleClick}>설정</StyledButton>
      {isSetting && <CustomSetting />}
      {isSetting && <DifficultySetting />}
    </Wrapper>
  );
}

export default memo(Setting);
