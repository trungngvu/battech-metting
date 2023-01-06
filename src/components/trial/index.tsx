import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import useTrans from '~/hooks/use-trans';

import countries from 'data/countries.json';

type DataProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companySize: unknown;
  companyName: string;
  industry: string;
  job: string;
  country: string;
  purpose: string;
  receiveEmailUpdate: boolean;
  receiveEmailNews: boolean;
  agreeRules: boolean;
};

const Trial = () => {
  const trans = useTrans();
  const schema = yup
    .object({
      firstName: yup.string().required(trans.home.trial.schema.firstName),
      lastName: yup.string().required(trans.home.trial.schema.lastName),
      email: yup.string().required(trans.home.trial.schema.email.required).email(trans.home.trial.schema.email.format),
      phone: yup.number().typeError(trans.home.trial.schema.phone),
      companyName: yup.string().required(trans.home.trial.schema.companyName),
      purpose: yup.string().required(trans.home.trial.schema.purpose),
      agreeRules: yup.bool().oneOf([true], trans.home.trial.schema.agreeRules),
    })
    .required();

  const rules = [
    {
      name: trans.home.trial.rules[1],
      value: 'receiveEmailUpdate',
    },
    {
      name: trans.home.trial.rules[2],
      value: 'receiveEmailNews',
    },
    {
      name: trans.home.trial.rules[3],
      value: 'agreeRules',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <div className="flex flex-col justify-center px-4 py-10 bg-black bg-center bg-no-repeat bg-cover sm:py-16 sm:flex-row bg-trial gap-x-16 lg:gap-x-28 gap-y-8">
      <div className="container flex flex-col justify-between md:flex-row gap-x-16 lg:gap-x-28 gap-y-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="text-3xl font-bold text-white">{trans.home.trial.title}</div>

          <div className="mt-5 text-white">{trans.home.trial.content}</div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 gap-y-4">
          <div className="flex gap-x-4">
            <div className="flex flex-col w-1/2 gap-y-2">
              <input
                {...register('firstName')}
                className="w-full h-12 p-4 rounded-lg outline-none"
                placeholder={`${trans.home.trial.form.firstName}*`}
                maxLength={50}
              />

              {errors.firstName?.message && (
                <p className="text-sm font-medium text-red-500">{errors.firstName?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <input
                {...register('lastName')}
                className="w-full h-12 p-4 rounded-lg outline-none"
                placeholder={`${trans.home.trial.form.lastName}*`}
                maxLength={50}
              />

              {errors.lastName?.message && (
                <p className="text-sm font-medium text-red-500">{errors.lastName?.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <input
              {...register('email')}
              className="w-full h-12 p-4 rounded-lg outline-none"
              placeholder="Email*"
              maxLength={200}
            />

            {errors.email?.message && <p className="text-sm font-medium text-red-500">{errors.email?.message}</p>}
          </div>

          <div className="flex gap-x-4">
            <div className="flex flex-col w-1/2 gap-y-2">
              <input
                {...register('phone')}
                className="w-full h-12 p-4 rounded-lg outline-none"
                placeholder={`${trans.home.trial.form.phone}*`}
                maxLength={12}
              />

              {errors.phone?.message && <p className="text-sm font-medium text-red-500">{errors.phone?.message}</p>}
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <select
                id="companySize"
                {...register('companySize')}
                className="w-full h-12 p-3 rounded-lg appearance-none text-secondary"
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" className="text-secondary">
                  {`${trans.home.trial.form.companySize}*`}
                </option>
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>

              {errors.companySize?.message && (
                <p className="text-sm font-medium text-red-500">{errors.companySize?.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex flex-col w-1/2 gap-y-2">
              <input
                {...register('companyName')}
                className="w-full h-12 p-4 rounded-lg outline-none"
                placeholder={`${trans.home.trial.form.company}*`}
                maxLength={50}
              />

              {errors.companyName?.message && (
                <p className="text-sm font-medium text-red-500">{errors.companyName?.message}</p>
              )}
            </div>

            <div className="flex flex-col w-1/2 gap-y-2">
              <input
                {...register('industry')}
                className="w-full h-12 p-4 rounded-lg outline-none"
                placeholder={`${trans.home.trial.form.industry}`}
                maxLength={30}
              />

              {errors.industry?.message && (
                <p className="text-sm font-medium text-red-500">{errors.industry?.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <input
              {...register('job')}
              className="w-full h-12 p-4 rounded-lg outline-none"
              placeholder={`${trans.home.trial.form.job}`}
              maxLength={30}
            />

            {errors.job?.message && <p className="text-sm font-medium text-red-500">{errors.job?.message}</p>}
          </div>

          <div className="flex flex-col gap-y-2">
            <select
              id="country"
              {...register('country')}
              className="w-full h-12 p-3 rounded-lg outline-none appearance-none text-secondary"
              defaultValue={'DEFAULT'}
            >
              <option value="DEFAULT" className="text-secondary">
                {`${trans.home.trial.form.country}`}
              </option>

              {countries.map(({ name, code }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>

            {errors.country?.message && <p className="text-sm font-medium text-red-500">{errors.country?.message}</p>}
          </div>

          <div className="flex flex-col gap-y-2">
            <textarea
              rows={4}
              {...register('purpose')}
              className="w-full p-4 rounded-lg shadow-none outline-none resize-none"
              placeholder={`${trans.home.trial.form.purpose}*`}
              maxLength={1500}
            />

            {errors.purpose?.message && <p className="text-sm font-medium text-red-500">{errors.purpose?.message}</p>}
          </div>

          <div className="flex flex-col gap-y-2">
            {rules.map(rule => (
              <div key={rule.value} className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  {...register(rule.value as 'receiveEmailUpdate' | 'receiveEmailNews' | 'agreeRules')}
                  className="border-0 border-none outline-none cursor-pointer ring-offset-0 focus:ring-offset-0 focus:outline-none"
                />

                <div className="text-sm text-white lg:text-base">{rule.name}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <button
              type="submit"
              className="w-full h-12 mt-4 font-medium text-white cursor-pointer bg-primary rounded-3xl hover:bg-blue-600"
            >
              {`${trans.home.trial.form.submit}`}
            </button>

            {errors.agreeRules?.message && (
              <p className="text-sm font-medium text-center text-red-500">{errors.agreeRules?.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trial;
