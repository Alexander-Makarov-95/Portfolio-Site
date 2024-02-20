import DetailedTable, { type TableData } from '@/components/detailed-table/detailed-table';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import { styled } from 'stitches.config';
import ReactIcon from '@/components/icon/react-icon';
import Chip from '@/components/chip/chip';
import NextjsIcon from '@/components/icon/nextjs-icon'
import TypeScriptIcon from '@/components/icon/typescript-icon'
import VbNetIcon from '@/components/icon/vbnet-icon'
import ThreejsIcon from '@/components/icon/threejs-icon'
import NodejsIcon from '@/components/icon/nodejs-icon'
import JavascriptIcon from '@/components/icon/javascript-icon';
import PythonIcon from '@/components/icon/python-icon';
import SqlIcon from '@/components/icon/sql-icon';
import RestApiIcon from '@/components/icon/rest-icon';


const TableMetrics = () => {

  const tableData: TableData[] = [
    {
      label: 'REACT',
    value: (
      <Chip link='https://reactjs.org/'>
        <ReactIcon color="gray12" width={24} height={18.5} />
      </Chip>
    )
    },
    {
      label: 'THREE.JS',
      value: (
        <Chip link='https://threejs.org/'>
              <ThreejsIcon color="cyan3" width={25} height={22} />
            </Chip>
      )
    },
    {
      label: 'JAVASCRIPT',
      value: (
        <Chip link='https://www.javascript.com/'>
              <JavascriptIcon width={25} height={20} />
            </Chip>
      )
    },
    {
      label: 'NEXT.JS',
      value: (
        <Chip link='https://nextjs.org/'>
              <NextjsIcon color="orange1" width={55} />
            </Chip>
      )
    },
    {
      label: 'NODE.JS',
      value: (
        <Chip link='https://nodejs.org/en/about'>
              <NodejsIcon color="green1" width={19} />
            </Chip>
      )
    },
    {
      label: 'TYPESCRIPT',
      value: (
        <Chip link='https://www.typescriptlang.org/'>
              <TypeScriptIcon color="gray12" width={22} height={17} />
            </Chip>
      )
    },
    {
      label: 'VB.NET',
      value: (
        <Chip link='https://learn.microsoft.com/en-us/dotnet/visual-basic/'>
              <VbNetIcon width={22} height={20} />
            </Chip>
      )
    },
    {
      label: 'PYTHON',
      value: (
        <Chip link='https://www.python.org/'>
              <PythonIcon width={22} height={20} />
            </Chip>
      )
    },
    {
      label: 'SQL',
      value: (
        <Chip link='https://en.wikipedia.org/wiki/SQL'>
              <SqlIcon width={30} />
            </Chip>
      )
    },
    {
      label: 'REST',
      value: (
        <Chip link='https://en.wikipedia.org/wiki/REST'>
          <RestApiIcon width={24} height={20} />
        </Chip>
      ),
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

export default TableMetrics;
