import { signInAction } from '@/lib/actions/auth'
import { SubmitButton } from '@/components/submit-button'
import { Divider, Input, Link } from '@nextui-org/react'

export default function SignInForm() {

  return (
    <>
      <form className="flex flex-col gap-3">
        <Input
          isRequired
          label="Email"
          name="email"
          variant="bordered"
          placeholder="you@example.com"
          required
        />
        <Input
          isRequired
          label="Password"
          placeholder="Your password"
          type='password'
          variant="bordered"
        />
        <div className="flex items-center justify-end px-1 py-2">
          <Link href="/forgot-password" size="sm">
            Forgot your password?
          </Link>
        </div>
        <SubmitButton color="primary" formAction={signInAction}>
          Sign in
        </SubmitButton>
      </form>
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link href="/sign-up" size="sm">
          Sign Up
        </Link>
      </p>
    </>
  )
}
