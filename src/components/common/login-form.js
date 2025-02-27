"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Please enter a valid email"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  })
  .required()


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-2 mb-8">
          <Image src="/common/logo_blind.svg" alt="logo" height={50} width={50} />
          <h1 className="text-4xl font-medium text-[#012043] font-amaranth">WINKOVER</h1>
        </div>
        <h2 className="text-3xl text-[#4682B4] mb-2 font-questrial">Sign In</h2>
        <p className="text-[#4A4A4A] mb-6">
          Don't have an account?
          <Link href="/register" className="text-[#D36E4B] ml-1 hover:underline font-questrial">
            Create now
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-[#4A4A4A] mb-1 font-questrial">
              User name or E-mail
            </label>
            <input
              id="email"
              type="text"
              className={`h-12 w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              {...register("email")}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-[#4A4A4A] mb-1 font-questrial">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`h-12 w-full rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                {...register("password")}
              />
              <Button
                type="button"
                className="absolute right-1 top-1 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </Button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
            <div className="flex justify-end mt-1">
              <Link href="/forgot-password" className="text-[#4A4A4A] hover:underline font-questrial">
                Forget your password
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-[100px] h-12 bg-[#4682B4] hover:bg-[#3E92CC]/90 text-white font-medium rounded-md font-questrial"
          >
            Sign In
          </button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-md">
              <span className="px-4 bg-white text-[#666666]">OR</span>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4">
            <Button
              type="button"
              className="h-12 sm:w-1/2 border border-gray-300 rounded-3xl flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-[#333333] font-questrial">Continue with Google</span>
            </Button>
            <Button
              type="button"
              className="h-12 sm:w-1/2 border border-gray-300 rounded-3xl flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
              <span className="text-[#333333] font-questrial">Continue with Facebook</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

