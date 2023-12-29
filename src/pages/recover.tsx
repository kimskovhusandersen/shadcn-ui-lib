import { typographyVariants } from "@/components/ui/typography";
import { Button, Input } from "..";

type ActionResponse = {
  error?: string;
  resetRequested?: boolean;
};

export default function Recover({ action }: { action: ActionResponse }) {
  return (
    <div>
      {action.resetRequested ? (
        <>
          <h2 className={typographyVariants({ variant: "h2" })}>
            Request Sent.
          </h2>
          <p>
            If that email address is in our system, you will receive an email
            with instructions about how to reset your password in a few minutes.
          </p>
          <br />
          <a href="/account/login">Return to Login</a>
        </>
      ) : (
        <>
          <h2 className={typographyVariants({ variant: "h2" })}>
            Forgot Password.
          </h2>
          <p>
            Enter the email address associated with your account to receive a
            link to reset your password.
          </p>
          <br />
          <form>
            <fieldset>
              <label htmlFor="email">Email</label>
              <Input
                aria-label="Email address"
                autoComplete="email"
                autoFocus
                id="email"
                name="email"
                placeholder="Email address"
                required
                type="email"
              />
            </fieldset>
            {action?.error ? (
              <p>
                <mark>
                  <small>{action.error}</small>
                </mark>
              </p>
            ) : (
              <br />
            )}
            <Button type="submit">Request Reset Link</Button>
          </form>
          <div>
            <br />
            <p>
              <a href="/account/login">Login →</a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
