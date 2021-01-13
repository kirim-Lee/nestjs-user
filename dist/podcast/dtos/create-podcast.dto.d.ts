import { Podcast } from '../entities/podcast.entity';
import { CoreOutput } from '../../common/dtos/output.dto';
declare const CreatePodcastInput_base: import("@nestjs/common").Type<Pick<Podcast, "title" | "category" | "rating">>;
export declare class CreatePodcastInput extends CreatePodcastInput_base {
}
export declare class CreatePodcastOutput extends CoreOutput {
    id?: number;
}
export {};
