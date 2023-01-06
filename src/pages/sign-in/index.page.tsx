import { ExclamationIcon, EyeIcon, EyeOffIcon, LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import useTrans from '~/hooks/use-trans';

import Layout from 'components/layout';

const SignIn = (): JSX.Element => {
  const trans = useTrans();
  const [pwVisibility, setPwVisibility] = useState(false);
  const { register, formState, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    return data;
  };
  return (
    <Layout title={trans.signIn.title} latestNews={false} footer={false}>
      <div className="w-full min-h-[600px] w1460:min-h-[800px] bg-[#2c2c78] bg-signin bg-no-repeat bg-cover relative">
        <div className="absolute hidden w1460:block left-[1.35%] top-[34.07%] z-10">
          <Image src="/assets/images/signin/1.svg" width="246px" height="246px" alt="" />
        </div>

        <div className="absolute hidden w1460:block left-[15%] top-[80%]">
          <Image src="/assets/images/signin/2.svg" width="91px" height="98px" alt="" />
        </div>

        <div className="absolute hidden w1460:block left-[50%] top-[50%]">
          <Image src="/assets/images/signin/4.svg" width="86px" height="52px" alt="" />
        </div>

        <div className="absolute top-0 left-0">
          <Image src="/assets/images/signin/top-left.svg" width="361px" height="370px" alt="" />
        </div>

        <div className="absolute bottom-0 right-0">
          <Image src="/assets/images/signin/bottom-right.svg" width="361px" height="300px" alt="" />
        </div>

        <div className="absolute hidden w1460:flex left-[25%] bottom-0 w-[528px] flex-col justify-center items-center">
          <div className="uppercase hidden w1460:flex flex-col mb-3 items-center text-[48px] text-white font-bold gap-2 font-mono">
            <div>Welcome to</div>
            <div>Battech meeting vr</div>
          </div>
          <Image src="/assets/images/signin/girl.png" width="490px" height="610px" alt="" />
        </div>

        <form
          className="absolute w-[300px] md:w-[510px] lg:w-[550px] w1460:w-[485px] bg-white rounded-xl shadow-xl left-[50%] -translate-x-1/2 -translate-y-1/2 w1460:translate-x-0 w1460:translate-y-0 top-[50%] w1460:left-[62%] w1460:top-[25%] z-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="p-8 py-6 font-bold text-2xl">{trans.signIn.heading}</div>
          <div className="text-sm pl-8">Email*</div>
          <div className="m-8 my-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 focus:border-blue-600 border ${
                formState.errors.email ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              {...register('email', {
                required: trans.signIn.schema.email.required,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: trans.signIn.schema.email.format,
                },
              })}
              type="text"
              placeholder="123@gmail.com"
            />
            <MailIcon className="absolute w-5 top-1/2 -translate-y-1/2 left-2 opacity-50" />
          </div>
          {formState.errors.email?.message && (
            <p className="text-red-600 text-sm mx-8 -mt-2 mb-1">
              <>
                <ExclamationIcon className="w-4 inline" />
                {formState.errors.email?.message}
              </>
            </p>
          )}
          <div className="text-sm pl-8">{trans.signIn.password}</div>
          <div className="m-8 mt-3 mb-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 ${
                formState.errors.password ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              type={pwVisibility ? 'text' : 'password'}
              placeholder="∗∗∗∗∗∗"
              {...register('password', { required: trans.signIn.schema.password })}
            />
            <LockClosedIcon className="absolute w-5 top-1/2 -translate-y-1/2 left-2 opacity-50" />
            {pwVisibility ? (
              <EyeOffIcon
                className="absolute w-5 top-1/2 -translate-y-1/2 right-2 opacity-50 z-10 cursor-pointer"
                onClick={() => setPwVisibility(false)}
              />
            ) : (
              <EyeIcon
                className="absolute w-5 top-1/2 -translate-y-1/2 right-2 opacity-50 z-10 cursor-pointer"
                onClick={() => setPwVisibility(true)}
              />
            )}
          </div>
          {formState.errors.password?.message && (
            <p className="text-red-600 text-sm mx-8 -mt-2 mb-1">
              <>
                <ExclamationIcon className="w-4 inline" />
                {formState.errors.password?.message}
              </>
            </p>
          )}
          <div className="p-8 py-2 text-sm">
            <input className="rounded border-gray-400" {...register('remember_login')} type="checkbox" />
            <span> {trans.signIn.rememberLogin}</span>
          </div>
          <div className="p-8 py-2">
            <input
              type="submit"
              value={trans.signIn.submit}
              className="w-full p-4 text-white font-bold uppercase bg-[#316ED9] rounded cursor-pointer"
            ></input>
          </div>
          <div className="pt-3 px-8 pb-1 flex justify-between text-sm">
            <span className="text-gray-400">{trans.signIn.signup}</span>
            <Link href="/forgot-password">
              <span className="text-blue-600 cursor-pointer">{trans.signIn.forgotPassword}</span>
            </Link>
          </div>
          <div className="px-8 mb-5">
            <button
              className="w-full text-white bg-[#3B5998] p-3 rounded-lg flex justify-center items-center"
              type="button"
            >
              <Image
                src="/assets/icons/facebook.svg"
                width="10px"
                height="18px"
                alt="Facebook icon"
                className="brightness-0 invert inline "
              />
              <span className="px-2">Facebook</span>
            </button>
          </div>
          <div className="px-8">
            <button
              className="w-full text-white bg-[#D34836] p-3 rounded-lg mb-5 flex justify-center items-center"
              type="button"
            >
              <Image
                src="/assets/icons/google-plus.svg"
                width="27px"
                height="17px"
                alt="Google icon"
                className="brightness-0 invert inline "
              />
              <span className="px-2">Google</span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default SignIn;
