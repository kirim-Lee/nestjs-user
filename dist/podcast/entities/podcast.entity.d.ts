import { Episode } from './episode.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Podcast extends CoreEntity {
    title: string;
    category: string;
    rating: number;
    episodes: Episode[];
}
