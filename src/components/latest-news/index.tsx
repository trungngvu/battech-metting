import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useSnackbar } from 'notistack';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useTrans from '~/hooks/use-trans';

type DataProps = {
  email: string;
};

const inputVariants = {
  focus: {
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const LatestNews = () => {
  const trans = useTrans();
  const schema = yup.object({
    email: yup.string().required(trans.home.trial.schema.email.required).email(trans.home.trial.schema.email.format),
  });
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<DataProps>({
    resolver: yupResolver(schema),
  });

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    clearErrors();
    setEmail(event.currentTarget.value);
  };

  const onSubmit = async () => {
    setPending(true);

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (result.success) {
      enqueueSnackbar('Đăng ký thành công.', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
      setEmail('');
      setPending(false);
    } else {
      enqueueSnackbar(result.message || 'Có lỗi xảy ra', {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
      setPending(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 py-10 sm:py-16 bg-primary">
      <div>
        <div className="mt-10 text-3xl font-bold text-center text-white uppercase sm:text-news md:text-left">
          {trans.latest.title}
        </div>

        <div className="mt-4 text-center text-white md:text-left">{trans.latest.sub}</div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full mt-12 sm:items-start sm:flex-row w-m gap-x-3 gap-y-5"
        >
          <div className="flex flex-col justify-center flex-1 w-full">
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              {...register('email')}
              className="h-12 py-4 text-black outline-none rounded-3xl px-9"
              value={email}
              onChange={handleChangeEmail}
              placeholder={trans.latest.placeholder}
            />

            <p className="hidden mt-2 text-sm font-bold text-red-500 sm:text-center ml-9 sm:h-10 sm:flex">
              {errors.email?.message}
            </p>
          </div>

          <motion.button
            type="submit"
            className="flex items-center justify-center h-12 px-8 font-bold text-white uppercase bg-black cursor-pointer w-52 hover:bg-gray-900 rounded-3xl place-items-center whitespace-nowrap"
          >
            {pending && <div className="w-6 h-6 ease-linear border-gray-200 rounded-full border-[3px] loader"></div>}

            {!pending && <div>{trans.latest.button}</div>}
          </motion.button>

          <p className="flex h-10 mt-2 text-sm font-bold text-red-500 sm:text-center sm:hidden">
            {errors.email?.message}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LatestNews;
