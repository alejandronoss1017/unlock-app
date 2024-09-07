'use client'

import { signInAction } from '@/lib/actions/auth'
import { SubmitButton } from '@/components/submit-button'
import { Divider, Input, Link } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function SignInForm() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

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
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Eye
                  name="Eye"
                  className="pointer-events-none text-2xl text-default-400"
                  size={24}
                />
              ) : (
                <EyeOff
                  className="pointer-events-none text-2xl text-default-400"
                  size={24}
                />
              )}
            </button>
          }
          label="Password"
          placeholder="Your password"
          type={isVisible ? 'text' : 'password'}
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
