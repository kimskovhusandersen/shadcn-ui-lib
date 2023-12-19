import SettingsAccount from "../components/ui/settings-account";
import SettingsLayout from "../components/ui/settings-layout";
import { SettingsProfile } from "../components/ui/settings-profile";

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
