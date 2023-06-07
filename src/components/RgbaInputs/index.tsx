import { Group } from '../Group';
import { PairInputs } from './PairInputs';

export const RgbaInputs: JSX.FC = () => (
  <Group open title="RGBA">
    <PairInputs param="r" />
    <PairInputs param="g" />
    <PairInputs param="b" />
    <PairInputs param="a" />
  </Group>
);
