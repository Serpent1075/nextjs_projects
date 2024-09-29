import React from 'react'
import { useTranslations } from 'next-intl';
import AuthComponent from '@/components/AuthComponent';

export default function HomePage() {
  
  const t = useTranslations('Index');
   
  return (
    <div>
      <AuthComponent />
      <h1>{t('sso')}</h1>
    </div>
  );
}