export class TorpedoLibraryLibrary {
  public getCurrentTime(): string {
    return 'The current time as returned from the torpedo library is ' + new Date().toTimeString();
  }
}
