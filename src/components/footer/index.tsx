import { AtSymbolIcon, ChevronRightIcon, HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useTrans from 'hooks/use-trans';

// import socials from 'data/socials.json';

type DataProps = {
  email: string;
};

const inputVariants = {
  focus: {
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const trans = useTrans();
  const router = useRouter();

  const { base: transBase, validator: transValidator, footer: transFooter } = trans;

  const schema = yup.object({
    email: yup.string().required(transValidator.noEmail).email(transValidator.invalidEmail),
  });

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
      enqueueSnackbar(transBase.subscribeSuccess, {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
      setEmail('');
      setPending(false);
    } else {
      enqueueSnackbar(result.message || transBase.errorMessage, {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
      setPending(false);
    }
  };

  useEffect(() => {
    setEmail('');
  }, [router.pathname]);

  return (
    <div className="w-full bg-[#0053A0] py-14 px-4">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row gap-y-8 justify-between border-b border-b-[#D7D7D7] pb-[23px] items-center">
          <div className="flex gap-4">
            {/* {socials.map(social => (
              <div
                key={social.name}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer"
              >
                <Image src={social.src} width={social.width} height={social.height} alt={social.name} />
              </div>
            ))} */}
          </div>

          <div className="flex items-center gap-x-[17px] w-full lg:w-fit">
            <div className="text-xl font-bold text-white uppercase md:text-2xl whitespace-nowrap">
              {transBase.signup}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="relative w-full lg:w-fit">
              <motion.input
                variants={inputVariants}
                whileFocus="focus"
                {...register('email')}
                value={email}
                onChange={handleChangeEmail}
                placeholder="Email"
                className="relative h-[40px] w-full lg:w-[313px] rounded-[24.5px] flex items-center pl-[16px] text-[#979797] placeholder:text-[#979797] outline-none placeholder:text-[15px]"
              />

              <p className="absolute top-[-30px] left-[-20px] hidden text-sm font-bold text-red-500 sm:text-center ml-9 sm:h-10 sm:flex">
                {errors.email?.message}
              </p>

              <motion.button
                type="submit"
                className="flex items-center justify-center bg-[#0170EB] w-[71px] h-[36px] font-bold text-white cursor-pointer rounded-3xl place-items-center whitespace-nowrap absolute right-[2px] top-[2px]"
              >
                {pending && (
                  <div className="w-5 h-5 ease-linear border-gray-200 rounded-full border-[3px] loader"></div>
                )}

                {!pending && <div>{transBase.send}</div>}
              </motion.button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 border-b border-b-[#D7D7D7]">
          <div className="lg:border-r border-b lg:border-b-0 border-[#D7D7D7] pb-12 lg:pb-0 lg:min-h-[340px] pr-4">
            <div>
              <Image src="/assets/icons/tower.svg" alt="about" width={35} height={35} />
            </div>

            <div className="mt-3 text-2xl font-bold text-white uppercase">{transFooter.about.title}</div>

            <div className="flex flex-col mt-6 text-white gap-y-2">
              <div className="flex gap-2">
                <div className="font-bold up">
                  <AtSymbolIcon width={20} height={20} />
                </div>

                <div className="uppercase">{transFooter.about.info}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <HomeIcon width={20} height={20} />
                </div>

                <div>{transFooter.about.address}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <PhoneIcon width={20} height={20} />
                </div>

                <div>{transFooter.about.phone}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <MailIcon width={20} height={20} />
                </div>

                <div>{transFooter.about.email}</div>
              </div>
            </div>
          </div>

          <div className="lg:border-r py-12 lg:py-0 border-b lg:border-b-0 border-[#D7D7D7] lg:min-h-[340px] lg:pl-11">
            <div>
              <Image src="/assets/icons/products.svg" alt="about" width={35} height={35} />
            </div>

            <div className="mt-3 text-2xl font-bold text-white uppercase">{transFooter.services.title}</div>

            <div className="flex flex-col mt-6 text-white gap-y-2">
              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.services.website}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.services.app}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.services.metaverse}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.services.software}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.services.nft}</div>
              </div>
            </div>
          </div>

          <div className="lg:min-h-[340px] pt-12 lg:pt-0 lg:pl-11">
            <div>
              <Image src="/assets/icons/question.svg" alt="about" width={35} height={35} />
            </div>

            <div className="mt-3 text-2xl font-bold text-white uppercase">{transFooter.support.title}</div>

            <div className="flex flex-col mt-6 text-white gap-y-2">
              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <Link href="/contact">
                  <div className="cursor-pointer">{transFooter.support.contact}</div>
                </Link>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.support.term}</div>
              </div>

              <div className="flex gap-2">
                <div className="font-bold">
                  <ChevronRightIcon width={20} height={20} />
                </div>

                <div>{transFooter.support.security}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 gap-x-4">
          <Image src="/assets/icons/logo-white.svg" alt="logo" width={220} height={70} />

          <div className="text-center text-white">Copyrights © 2010 - 2022 BATTECH. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
