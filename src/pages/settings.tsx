import SettingsAccount from "../components/ui/settings-account";
import SettingsLayout from "../components/ui/settings-layout";
import { SettingsProfile } from "../components/ui/settings-profile";
import { Layout } from "./layout";

export default function Settings() {
  return (
    <Layout>
      <SettingsLayout>
        <SettingsProfile />
        <SettingsAccount />
      </SettingsLayout>
    </Layout>
  );
}
