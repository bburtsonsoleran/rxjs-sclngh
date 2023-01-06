import { Card } from './card';
import { FixedSizeArray } from '../fixed-size-array';
export type Cards = Cards[] & FixedSizeArray<Card, 52>;
export type Deck = Cards;
