import { CoreEntity } from 'src/common/entities/core.entity';
import { Podcast } from './podcast.entity';
export declare class Episode extends CoreEntity {
    title: string;
    category: string;
    podcast: Podcast;
}
