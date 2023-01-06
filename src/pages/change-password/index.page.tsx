import { ExclamationIcon, EyeIcon, EyeOffIcon, LockClosedIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Layout from 'components/layout';

const ChangePassword = (): JSX.Element => {
  const [pwVisibility, setPwVisibility] = useState(false);
  const [pwCfVisibility, setPwCfVisibility] = useState(false);
  const { register, formState, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
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
          <div className="p-8 py-6 font-bold text-2xl">Mật khẩu mới</div>
          <div className="text-sm pl-8">Mật khẩu*</div>
          <div className="m-8 mt-3 mb-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 ${
                formState.errors.password ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              type={pwVisibility ? 'text' : 'password'}
              placeholder="∗∗∗∗∗∗"
              {...register('password', { required: 'Vui lòng nhập mật khẩu!' })}
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
          <div className="text-sm pl-8">Xác nhận mật khẩu*</div>
          <div className="m-8 mt-3 mb-3 text-sm relative">
            <input
              className={`pl-8 rounded w-full p-3 placeholder:opacity-50 ${
                formState.errors.password_confirm ? 'border-red-500 border-2 ' : 'border-gray-200'
              }`}
              type={pwCfVisibility ? 'text' : 'password'}
              placeholder="∗∗∗∗∗∗"
              {...register('password_confirm', {
                validate: value => value === password.current || 'Mật khẩu không trùng khớp!',
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

export default ChangePassword;
