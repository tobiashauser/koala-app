import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService
 {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>
  ) {}

  create(createMediaInput: CreateMediaInput) {
    const newMedia = this.mediaRepository.create();

    newMedia.title = createMediaInput.title;
    newMedia.type = createMediaInput.type;
    newMedia.composer = createMediaInput.composer;

    return this.mediaRepository.save(newMedia);
  }

  findAll() {
    return this.mediaRepository.find();
  }

  findOne(id: number) {
    return this.mediaRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateMediaInput: UpdateMediaInput) {
    try {
      await this.mediaRepository.update(id, {
        title: updateMediaInput.title,
        composer: updateMediaInput.composer
      });

      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  remove(id: number) {
    return this.mediaRepository.delete(id);
  }
}
