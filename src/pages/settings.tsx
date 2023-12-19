import SettingsAccount from "./settings-account";
import SettingsLayout from "./settings-layout";
import { SettingsProfile } from "./settings-profile";

export default function Settings() {
  return (
    <>
      <SettingsLayout>
        <SettingsProfile />
        <SettingsAccount />
      </SettingsLayout>
    </>
  );
}
