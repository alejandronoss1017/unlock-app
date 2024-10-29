import { Input } from '@nextui-org/react'
import { SubmitButton } from '@/components/submit-button'

export default function ResetPasswordForm() {
  return (
    <>
      <form className="flex flex-col gap-3">
        <Input
          isRequired
          label="Password"
          type="password"
          name="password"
          placeholder="New password"
          variant="bordered"
          required
        />
        <Input
          isRequired
          label="Confirm password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          variant="bordered"
          required
        />
        <SubmitButton color="primary">Reset password</SubmitButton>
      </form>
    </>
  )
}
