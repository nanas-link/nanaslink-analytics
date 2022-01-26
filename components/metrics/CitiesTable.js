import React from 'react';
import MetricsTable from './MetricsTable';
import { percentFilter } from 'lib/filters';
import { FormattedMessage } from 'react-intl';
import useLocale from 'hooks/useLocale';

export default function CitiesTable({ websiteId, onDataLoad, ...props }) {
  const { locale } = useLocale();

  function renderLabel({ x }) {
    return (
      <div className={locale}>
        {x ?? <FormattedMessage id="label.unknown" defaultMessage="Unknown" />}
      </div>
    );
  }

  return (
    <MetricsTable
      {...props}
      title={'Cities'}
      type="city"
      metric={<FormattedMessage id="metrics.visitors" defaultMessage="Visitors" />}
      websiteId={websiteId}
      onDataLoad={data => onDataLoad?.(percentFilter(data))}
      renderLabel={renderLabel}
    />
  );
}
