import { Value } from './value';
import { Suit } from './suit';

export interface Card {
  suit: Suit;
  value: Value;
}
