import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import useTrans from '~/hooks/use-trans';

import Layout from 'components/layout';
import Map from 'components/map';
import Message from 'components/message';

const Contact: NextPage = () => {
  const trans = useTrans();
  return (
    <Layout title={trans.contact.title} description={trans.contact.description} banner animate>
      <div className="w-full">
        <div className="w-full">
          <div className="container grid gap-8 p-4 mt-10 mb-10 md:grid-cols-2">
            <div className="flex flex-col w-full">
              <div className="text-2xl font-bold uppercase">{trans.contact.contactUs}</div>
              <div className="mt-4">{trans.contact.paragraph}</div>

              <div className="flex p-6 mt-4 cursor-pointer hover:shadow-contact gap-x-5">
                <div>
                  <LocationMarkerIcon width={25} height={25} color="#0070EA" />
                </div>

                <div className="flex flex-col">
                  <div className="text-base font-semibold text-secondary">{trans.contact.addr}</div>
                  <div className="mt-2">{trans.contact.address}</div>
                </div>
              </div>

              <div className="flex p-6 mt-4 cursor-pointer hover:shadow-contact gap-x-5">
                <div>
                  <MailIcon width={25} height={25} color="#0070EA" />
                </div>

                <div className="flex flex-col">
                  <div className="text-base font-semibold text-secondary">Email:</div>

                  <div className="mt-2 tracking-wide">cskh@battech.vn</div>
                </div>
              </div>

              <div className="flex p-6 mt-4 cursor-pointer hover:shadow-contact gap-x-5">
                <div>
                  <PhoneIcon width={30} height={30} color="#0070EA" />
                </div>

                <div className="flex flex-col">
                  <div className="text-base font-semibold text-secondary">{trans.contact.phone}</div>

                  <div className="mt-2 tracking-wide">024 85 896 999</div>
                </div>
              </div>
            </div>

            <Message />
          </div>
        </div>

        <Map />
      </div>
    </Layout>
  );
};

export default Contact;
