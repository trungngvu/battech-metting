import { Menu } from '@headlessui/react';
import { US, VN } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const languages = [
  {
    name: 'VN',
    value: 'vi',
    icon: <VN className="relative top-[-1px]" />,
  },
  {
    name: 'EN',
    value: 'en',
    icon: <US className="relative top-[-1px]" />,
  },
];

const SelectLanguages = () => {
  const [lang, setLang] = useState(languages[0]);

  const router = useRouter();

  useEffect(() => {
    const currentLanguage = languages.find(item => item.value === router.locale);

    if (currentLanguage) {
      setLang(currentLanguage);
    }
  }, [router.locale]);

  const handleChangeLang = async (language: string) => {
    const index = languages.findIndex(item => item.value === language);

    await router.push(router.asPath, router.asPath, { locale: language });

    setLang(languages[index]);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-3 py-1">
        <div className="text-base font-medium text-white uppercase xl:text-xl w-[60px] text-left flex gap-2 justify-center items-center">
          {lang.icon}

          <div>{lang.name}</div>
        </div>
      </Menu.Button>

      <Menu.Items className="absolute right-0 flex flex-col bg-white rounded-sm">
        {languages.map(language => (
          <Menu.Item key={language.name}>
            {() => (
              <div
                className="flex gap-2 px-3 py-1 text-base font-medium text-left w-[84px] text-black uppercase cursor-pointer xl:text-xl hover:bg-primary hover:text-white"
                onClick={() => handleChangeLang(language.value)}
              >
                {language.icon}

                <div>{language.name}</div>
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default SelectLanguages;
