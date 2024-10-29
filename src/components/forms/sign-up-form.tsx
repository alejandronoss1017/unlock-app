import { SubmitButton } from '@/components/submit-button'
import { signUpAction } from '@/lib/actions/auth'
import { Divider, Input, Link } from '@nextui-org/react'

export default function SignUpForm() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <Input
          isRequired
          label="Email"
          name="email"
          type="email"
          variant="bordered"
          placeholder="you@example.com"
          required
        />
        <Input
          isRequired
          label="Password"
          name="password"
          placeholder="Your password"
          variant="bordered"
          type='password'
        />
        <SubmitButton color="primary" formAction={signUpAction}>
          Sign up
        </SubmitButton>
      </form>
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      <p className="text-center text-small">
        Already have an account?&nbsp;
        <Link href="/sign-in" size="sm">
          Sign in
        </Link>
      </p>
    </>
  )
}
