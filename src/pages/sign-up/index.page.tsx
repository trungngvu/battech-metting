import {
  BadgeCheckIcon,
  ExclamationIcon,
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import useTrans from '~/hooks/use-trans';

import Layout from 'components/layout';

const SignUp = (): JSX.Element => {
  const trans = useTrans();
  const [pwVisibility, setPwVisibility] = useState(false);
  const [pwCfVisibility, setPwCfVisibility] = useState(false);
  const { register, formState, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data: FieldValues) => {
    return data;
  };
  return (
    <Layout title={trans.signUp.title} latestNews={false} footer={false}>
      <div className="w-full min-h-[820px] xl:min-h-[calc(10%+800px)] bg-[#2c2c78] xl:bg-signup bg-no-repeat bg-cover relative">
        <form
          className="absolute mt-2 xl:mt-0 w-[300px] md:w-[510px] lg:w-[550px] xl:w-[485px] bg-white rounded-xl shadow-xl left-[50%] -translate-x-1/2 -translate-y-1/2 top-[50%] xl:translate-y-0 xl:top-[10%] xl:left-[75%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="p-8 py-6 font-bold text-2xl">{trans.signUp.heading}</div>
          <div className="text-sm pl-8">{trans.signUp.name}</div>
          <div className="m-8 my-3 text-sm relative">
            <input
              className={`pl-8 rounded w-1/2 md:w-3/5 p-3 placeholder:opacity-50 focus:border-blue-600 border 
                    ${formState.errors.name ? 'border-red-500 border-2 ' : 'border-gray-200'}`}
              {...register('name', {
                required: trans.signUp.schema.name.require,
                pattern: {
                  value:
                    /^[AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+ [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]+(?: [AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIÌỈĨÍỊJKLMNOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢPQRSTUÙỦŨÚỤƯỪỬỮỨỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*)*/,
                  message: trans.signUp.schema.name.require,
                },
              })}
              type="text"
              placeholder={trans.signUp.namePlaceholder}
            />
            <UserIcon className="absolute w-5 top-1/2 -translate-y-1/2 left-2 opacity-50" />
            <select
              className={`md:ml-4 ml-1 w-[110px] md:w-[162px] lg:w-[178px] xl:w-[152px] p-3 rounded md:pl-9 focus:border-blue-600 border ${
                formState.errors.name ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              {...register('gender', {
                pattern: {
                  value: /^(?!.*Gender).*$/,
                  message: trans.signUp.schema.gender,
                },
              })}
            >
              <option value="Gender">{trans.signUp.gender.gender}</option>
              <option value="Male">{trans.signUp.gender.male}</option>
              <option value="Female">{trans.signUp.gender.female}</option>
              <option value="Other">{trans.signUp.gender.other}</option>
            </select>
            <BadgeCheckIcon className="hidden md:block absolute w-5 top-1/2 -translate-y-1/2 right-[131px] lg:right-[148px] xl:right-[122px] opacity-50" />
          </div>
          <div className="flex">
            {formState.errors.name?.message && (
              <p className="text-red-600 text-sm ml-8 -mt-2 mb-1 w-[calc(50%-25px)] md:w-[280px] lg:w-[305px] xl:w-[260px]">
                <>
                  <ExclamationIcon className="w-4 inline" />
                  {formState.errors.name?.message}
                </>
              </p>
            )}
            {formState.errors.gender?.message && (
              <p className={`text-red-600 text-sm -mt-2 mb-1 ${!formState.errors.name && 'ml-[50%] md:ml-[60%]'}`}>
                <>
                  <ExclamationIcon className="w-4 inline" />
                  {formState.errors.gender?.message}
                </>
              </p>
            )}
          </div>
          <div className="text-sm pl-8">Email*</div>
          <div className="m-8 my-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 focus:border-blue-600 border  ${
                formState.errors.email ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              {...register('email', {
                required: trans.signUp.schema.email.require,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: trans.signUp.schema.email.format,
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
          <div className="text-sm pl-8">{trans.signUp.password}</div>
          <div className="m-8 mt-3 mb-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 ${
                formState.errors.password ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              type={pwVisibility ? 'text' : 'password'}
              placeholder="∗∗∗∗∗∗"
              {...register('password', { required: trans.signUp.schema.password })}
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
          <div className="text-sm pl-8">{trans.signUp.passwordConfirmation}</div>
          <div className="m-8 mt-3 mb-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 ${
                formState.errors.password_confirm ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              type={pwCfVisibility ? 'text' : 'password'}
              placeholder="∗∗∗∗∗∗"
              {...register('password_confirm', {
                validate: value => value === password.current || trans.signUp.passwordConfirmation,
              })}
            />
            <LockClosedIcon className="absolute w-5 top-1/2 -translate-y-1/2 left-2 opacity-50" />
            {pwCfVisibility ? (
              <EyeOffIcon
                className="absolute w-5 top-1/2 -translate-y-1/2 right-2 opacity-50 z-10 cursor-pointer"
                onClick={() => setPwCfVisibility(false)}
              />
            ) : (
              <EyeIcon
                className="absolute w-5 top-1/2 -translate-y-1/2 right-2 opacity-50 z-10 cursor-pointer"
                onClick={() => setPwCfVisibility(true)}
              />
            )}
          </div>
          {formState.errors.password_confirm?.message && (
            <p className="text-red-600 text-sm mx-8 -mt-2 mb-1">
              <>
                <ExclamationIcon className="w-4 inline" />
                {formState.errors.password_confirm?.message}
              </>
            </p>
          )}
          <Link href="/sign-in">
            <div className="px-8 -mb-2 text-sm pb-1 text-blue-600 cursor-pointer">
              {trans.signUp.haveAccountAlready}
            </div>
          </Link>
          <div className="p-8 py-2">
            <input
              type="submit"
              value={trans.signUp.submit}
              className="w-full p-4 text-white font-bold uppercase rounded bg-[#316ED9] cursor-pointer"
            ></input>
          </div>
          <div className="pt-3 px-8 flex justify-between text-sm">
            <span className="text-gray-400">{trans.signUp.signupwith}</span>
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
export default SignUp;
