import { ExclamationIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';

import Layout from 'components/layout';

const ForgotPassword = (): JSX.Element => {
  const { register, formState, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    return data;
  };
  return (
    <Layout title="Quên mật khẩu" latestNews={false} footer={false}>
      <div className="w-full bg-[#2c2c78] xl:bg-signup bg-no-repeat bg-cover relative">
        <form
          className="absolute w-[300px] md:w-[510px] lg:w-[550px] w1460:w-[485px] bg-white rounded-xl shadow-xl left-[50%] -translate-x-1/2 -translate-y-1/2 w1460:translate-x-0 w1460:translate-y-0 top-[50%] w1460:left-[62%] w1460:top-[25%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="p-8 py-6 font-bold text-2xl">Nhập Email cần lấy lại mật khẩu</div>
          <div className="text-sm pl-8">Email*</div>
          <div className="m-8 my-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 focus:border-blue-600 border ${
                formState.errors.email ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              {...register('email', {
                required: 'Vui lòng nhập Email!',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: 'Email không đúng định dạng!',
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
          <div className="pt-3 px-8 pb-1 flex justify-between text-sm">
            <Link href="/sign-in">
              <span className="text-blue-500 cursor-pointer">Đã có tài khoản</span>
            </Link>
          </div>
          <div className="p-8 pt-2 pb-5">
            <input
              type="submit"
              value="Xác nhận"
              className="w-full p-4 text-white rounded font-bold uppercase bg-[#316ED9] cursor-pointer"
            ></input>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
