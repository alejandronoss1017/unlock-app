import { Input } from '@nextui-org/react'
import { SubmitButton } from '@/components/submit-button'
// import { forgotPasswordAction } from '@/lib/actions/auth'

export default function ForgotPasswordForm() {
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
        <SubmitButton color="primary">Reset Password</SubmitButton>
      </form>
    </>
  )
}
