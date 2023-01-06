import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useSnackbar } from 'notistack';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useTrans from '~/hooks/use-trans';

type DataProps = {
  name: string;
  email: string;
  phone: string;
  messages: string;
};

const inputVariants = {
  focus: {
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const buttonVariants = {
  hover: {
    scale: 1.01,
    boxShadow: '0px 0px 2px #0170EA',
    transition: {
      yoyo: Infinity,
    },
  },
};

const Message = () => {
  const trans = useTrans();
  const schema = yup.object({
    name: yup
      .string()
      .required(trans.contact.message.schema.name.required)
      .min(2, trans.contact.message.schema.name.format),
    email: yup
      .string()
      .required(trans.contact.message.schema.email.required)
      .email(trans.contact.message.schema.email.format),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        trans.contact.message.schema.phone
      ),
    messages: yup.string().min(20, trans.contact.message.schema.message),
  });

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    messages: '',
  });
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(schema),
  });

  const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [event.currentTarget.name]: event.currentTarget.value });
  };

  const onSubmit = async () => {
    setPending(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      enqueueSnackbar(trans.contact.message.enqueue.success, {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
      setData({
        name: '',
        email: '',
        phone: '',
        messages: '',
      });
      setPending(false);
    } else {
      enqueueSnackbar(result.message || trans.contact.message.enqueue.fail, {
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
    <div className="w-full p-7 m-2 rounded-xl bg-[#EBF1FF]">
      <div className="text-2xl font-bold uppercase">{trans.contact.message.heading}</div>

      <div className="mt-2 text-base font-normal">{trans.contact.message.remind}</div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mt-9 gap-y-4">
        <div className="grid flex-wrap grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
          <div className="flex flex-col">
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              {...register('name')}
              name="name"
              maxLength={40}
              className="flex h-12 px-3 py-4 rounded-md focus:outline-none"
              placeholder={`${trans.contact.message.form.name}*`}
              value={data.name}
              onChange={handleChange}
            />

            {errors.name?.message && (
              <p className="mt-2 ml-2 text-sm font-medium text-red-500">{errors.name?.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              {...register('email')}
              name="email"
              className="flex-1 h-12 px-3 py-4 rounded-md focus:outline-none"
              placeholder="Email*"
              value={data.email}
              onChange={handleChange}
            />

            {errors.email?.message && (
              <p className="mt-2 ml-2 text-sm font-medium text-red-500">{errors.email?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            {...register('phone')}
            name="phone"
            className="flex-1 h-12 px-3 py-4 rounded-md focus:outline-none"
            placeholder={`${trans.contact.message.form.phone}*`}
            value={data.phone}
            onChange={handleChange}
          />

          {errors.phone?.message && (
            <p className="mt-2 ml-2 text-sm font-medium text-red-500">{errors.phone?.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <motion.textarea
            variants={inputVariants}
            whileFocus="focus"
            {...register('messages')}
            rows={6}
            name="messages"
            className="w-full px-3 py-4 border-none rounded-md resize-none focus:ring-0"
            placeholder={`${trans.contact.message.form.message}*`}
            maxLength={1000}
            value={data.messages}
            onChange={handleChange}
          />

          {errors.messages?.message && (
            <p className="mt-2 ml-2 text-sm font-medium text-red-500">{errors.messages?.message}</p>
          )}
        </div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="flex justify-center w-full p-4 font-bold text-white uppercase bg-primary rounded-3xl hover:bg-blue-600"
          type="submit"
        >
          {pending && <div className="w-6 h-6 ease-linear border-gray-200 rounded-full border-[3px] loader"></div>}

          {!pending && <div>{trans.contact.message.form.submit}</div>}
        </motion.button>
      </form>
    </div>
  );
};

export default Message;
