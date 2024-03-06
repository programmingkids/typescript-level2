export {};

class GameWorld {
  private static gw: GameWorld;

  // クラスの内側からのみ呼び出し可能なコンストラクタ

  // クラスの内外から呼び出し可能なメソッド
  public static getGameWorld(): GameWorld {
    if (GameWorld.gw === undefined) {
      GameWorld.gw = new GameWorld();
    }
    return GameWorld.gw;
  }

  // クラスの内外から呼び出し可能なメソッド
  public run(): void {
    console.log('ゲームを実行中');
  }
}

// メソッドを利用してコンストラクタを呼び出して、インスタンス取得

// エラー　クラスの外側からコンストラクタの呼び出し不可
// const game:GameWorld = new GameWorld();
