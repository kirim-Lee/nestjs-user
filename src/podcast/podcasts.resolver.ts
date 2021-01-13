import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';
import {
  CreatePodcastInput,
  CreatePodcastOutput,
} from './dtos/create-podcast.dto';
import { CoreOutput } from '../common/dtos/output.dto';
import {
  PodcastSearchInput,
  PodcastOutput,
  EpisodesOutput,
  EpisodesSearchInput,
  GetAllPodcastsOutput,
} from './dtos/podcast.dto';
import { UpdatePodcastInput } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import {
  CreateEpisodeInput,
  CreateEpisodeOutput,
} from './dtos/create-episode.dto';
import { UpdateEpisodeInput } from './dtos/update-episode.dto';
import { Roles } from 'src/auth/roles.decorator';

@Resolver(of => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query(returns => GetAllPodcastsOutput)
  @Roles('Any')
  getAllPodcasts(): Promise<GetAllPodcastsOutput> {
    return this.podcastsService.getAllPodcasts();
  }

  @Mutation(returns => CreatePodcastOutput)
  @Roles('Host')
  createPodcast(
    @Args('input') createPodcastInput: CreatePodcastInput,
  ): Promise<CreatePodcastOutput> {
    return this.podcastsService.createPodcast(createPodcastInput);
  }

  @Query(returns => PodcastOutput)
  @Roles('Any')
  getPodcast(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): Promise<PodcastOutput> {
    return this.podcastsService.getPodcast(podcastSearchInput.id);
  }

  @Mutation(returns => CoreOutput)
  @Roles('Host')
  deletePodcast(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): Promise<CoreOutput> {
    return this.podcastsService.deletePodcast(podcastSearchInput.id);
  }

  @Mutation(returns => CoreOutput)
  @Roles('Host')
  updatePodcast(
    @Args('input') updatePodcastInput: UpdatePodcastInput,
  ): Promise<CoreOutput> {
    return this.podcastsService.updatePodcast(updatePodcastInput);
  }
}

@Resolver(of => Episode)
export class EpisodeResolver {
  constructor(private readonly podcastService: PodcastsService) {}

  @Query(returns => EpisodesOutput)
  @Roles('Any')
  getEpisodes(
    @Args('input') podcastSearchInput: PodcastSearchInput,
  ): Promise<EpisodesOutput> {
    return this.podcastService.getEpisodes(podcastSearchInput.id);
  }

  @Mutation(returns => CreateEpisodeOutput)
  @Roles('Host')
  createEpisode(
    @Args('input') createEpisodeInput: CreateEpisodeInput,
  ): Promise<CreateEpisodeOutput> {
    return this.podcastService.createEpisode(createEpisodeInput);
  }

  @Mutation(returns => CoreOutput)
  @Roles('Host')
  updateEpisode(
    @Args('input') updateEpisodeInput: UpdateEpisodeInput,
  ): Promise<CoreOutput> {
    return this.podcastService.updateEpisode(updateEpisodeInput);
  }

  @Mutation(returns => CoreOutput)
  @Roles('Host')
  deleteEpisode(
    @Args('input') episodesSearchInput: EpisodesSearchInput,
  ): Promise<CoreOutput> {
    return this.podcastService.deleteEpisode(episodesSearchInput);
  }
}
