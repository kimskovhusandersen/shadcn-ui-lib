import { Button, Input, buttonVariants } from "..";

export function LoginForm() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" className="space-y-6" method="POST">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="email"
              >
                Email address
              </label>
              <div className="mt-2">
                <Input
                  autoComplete="email"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a className={buttonVariants({ variant: "link" })} href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  required
                  type="password"
                />
              </div>
            </div>

            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already has an account?{" "}
            <a className={buttonVariants({ variant: "link" })} href="#">
              Go to Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
