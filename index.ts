import { map } from 'rxjs';
import { Deck, DECK_OF_CARDS_URL, httpGet } from './app';

const deck = httpGet<Deck>(DECK_OF_CARDS_URL);
