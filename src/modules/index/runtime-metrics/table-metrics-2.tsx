import DetailedTable, { type TableData } from '@/components/detailed-table/detailed-table';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import useRandomRange from '@/helpers/hooks/use-random-range';
import { styled } from 'stitches.config';
import SwiftIcon from '@/components/icon/swift-icon';
import AwsSesIcon from '@/components/icon/aws-ses-icon';
import AwsApiGatewayIcon from '@/components/icon/aws-api-gateway-icon';
import AwsLambdaIcon from '@/components/icon/aws-lambda-icon';
import Chip from '@/components/chip/chip';
import AwsAmplifyIcon from '@/components/icon/aws-amplify-icon';
import GoogleBigQueryIcon from '@/components/icon/google-big-query-icon';
import CssIcon from '@/components/icon/css-icon';
import Html5Icon from '@/components/icon/html-5-icon';
import UiPathIcon from '@/components/icon/ui-path-icon';



const TableMetrics2 = () => {

  const tableData: TableData[] = [
    {
      label: 'AWS SES',
      value: (
        <Chip link='https://aws.amazon.com/ses/'>
          <AwsSesIcon width={24} height={20} />
        </Chip>
      ),
    },
    {
      label: 'AWS AMPLIFY',
      value: (
        <Chip link='https://aws.amazon.com/amplify/'>
          <AwsAmplifyIcon width={24} height={20} />
        </Chip>
      )
    },
    {
      label: 'AWS API GATEWAY',
      value: (
        <Chip text = "AWS API GATEWAY" link='https://aws.amazon.com/api-gateway/'>
          <AwsApiGatewayIcon width={24} height={20} />
        </Chip>
      )
    },
    {
      label: 'AWS LAMBDA',
      value: (
        <Chip text = "AWS LAMBDA" link='https://aws.amazon.com/lambda/'>
          <AwsLambdaIcon width={24} height={20} />
        </Chip>
      )
    },
    {
      label: 'GOOGLE BIG QUERY',
      value: (
        <Chip text = "GOOGLE BIG QUERY" link='https://cloud.google.com/bigquery'>
          <GoogleBigQueryIcon width={24} height={20} />
        </Chip>
      )
    },
    {
      label: 'SWIFT',
      value: (
        <Chip text = "SWIFT" link='https://developer.apple.com/swift/'>
          <SwiftIcon width={24} height={25} />
        </Chip>
      )
    },
    {
      label: 'HTML5',
      value: (
        <Chip text = "HTML5" link='https://www.w3.org/TR/html5/'>
          <Html5Icon width={24} height={20} />
        </Chip>
      ),
    },
    {
      label: 'CSS',
      value: (
        <Chip text = "CSS" link='https://www.w3.org/Style/CSS/'>
          <CssIcon width={24} height={20} />
        </Chip>
      )
    },
    {
      label: 'UIPATH',
      value: (
        <Chip text = "UIPATH" link='https://www.uipath.com/'>
          <UiPathIcon width={24} height={20} />
        </Chip>
      )
    },
  ];

  return (
    <Wrapper>
      <CornerDotsBox />
      <DetailedTable data={tableData} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  background: '$cyan14',
  display: 'flex',
  flexDirection: 'column',
});

export default TableMetrics2;
