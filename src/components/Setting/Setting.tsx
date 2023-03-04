import { memo, useCallback, useState } from "react";
import { StyledButton } from "./SettingStyle";
import CustomSetting from "../CustomSetting/CustomSetting";
import DifficultySetting from "../DifficultySetting/DifficultySetting";

function Setting() {
  const [isSetting, setIsSetting] = useState(false);

  const handleButtonClick = useCallback(
    () => setIsSetting((prev) => !prev),
    []
  );

  return (
    <>
      <StyledButton onClick={handleButtonClick}>설정</StyledButton>
      {isSetting && <CustomSetting />}
      {isSetting && <DifficultySetting />}
    </>
  );
}

export default memo(Setting);
