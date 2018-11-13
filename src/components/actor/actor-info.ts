import { Component, Input } from '@angular/core';

@Component({
  selector: 'actor-info',
  templateUrl: 'actor-info.html'
})

export class ActorInfoComponent {
  @Input() actorInfo: any;

  public vmActorName: string;
  public vmCharacter: string;
  public vmImageUrl: string;
  public vmNumberOfMovies: number;

  private imageSize: string = 'w185';

  constructor(
  ) {
  }

  ngOnInit(): void {
    // Inputs are accessible here
    this.initActorData();
  }

  private initActorData(): void {
    this.vmActorName = this.actorInfo.name;
    this.vmCharacter = this.actorInfo.character;
    this.vmImageUrl = `https://image.tmdb.org/t/p/${this.imageSize}${this.actorInfo.profile_path}`;

    // TODO: get number of movies DIMSHIK watched this actor appeared in
    this.vmNumberOfMovies = 5;
  }
}
