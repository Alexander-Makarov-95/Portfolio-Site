import { styled } from '@stitches/react';
import type { ComponentProps, ReactNode } from 'react';
import { Table, TableBody, TableCell, TableRow, T } from '../stitches';


export interface TableData {
  id?: string
  label: string | ReactNode
  value: string | ReactNode
  valueColor?: ComponentProps<typeof T>['color']

}

interface Props {
  data: TableData[]
}

const DetailedTable = ({ data }: Props) => {
  return (
    <Wrapper>
      <Table size="1" width="max">
        <TableBody>
          {data.map((dataItem: TableData) => {
            const dataItemKey = `${dataItem.id ?? dataItem.label}-${dataItem.value}`;

            return (
              <TableRow key={dataItemKey} animation="flash">
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <T size="5" color="gray10">{dataItem.label}</T>
                      )
                    : (
                        dataItem.label
                      )
                  }
                </TableCell>
                <TableCell>
                  {typeof dataItem.label === 'string'
                    ? (
                      <T size="5" color={dataItem.valueColor ?? 'cyan1'}>{dataItem.value}</T>
                      )
                    : (
                        dataItem.value
                      )}
                      {/* <Chip text="REACT" link='https://reactjs.org/'>
              <ReactIcon color="gray12" width={24} height={18.5} />
            </Chip> */}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled('div');

export default DetailedTable;
