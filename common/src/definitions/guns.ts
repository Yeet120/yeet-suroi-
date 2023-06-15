import { type ItemDefinition, ItemType } from "../utils/objectDefinitions";
import { v, type Vector } from "../utils/vector";
import { FireMode } from "../constants";

export type GunDefinition = ItemDefinition & {
    readonly itemType: ItemType.Gun

    readonly cooldown: number
    readonly switchCooldown: number
    readonly recoilMultiplier: number
    readonly recoilDuration: number
    readonly canQuickswitch?: boolean
    readonly shotSpread: number
    readonly bulletCount?: number
    readonly length: number
    readonly fists: {
        readonly left: Vector
        readonly right: Vector
        readonly animationDuration: number
    }
    readonly image: {
        readonly position: Vector
        readonly angle?: number
    }
    readonly capacity: number
    readonly ballistics: {
        readonly damage: number
        readonly obstacleMultiplier: number
        readonly speed: number
        readonly speedVariance: number
        readonly maxDistance: number
    }
} & ({
    readonly fireMode: FireMode.Auto | FireMode.Single
} | {
    readonly fireMode: FireMode.Burst
    readonly burstProperties: {
        readonly shotsPerBurst: number
        readonly burstCooldown: number
        // note: the time between bursts is burstCooldown, and the time between shots within a burst is cooldown
    }
});

export const Guns: GunDefinition[] = [
    {
        idString: "ak47",
        name: "AK-47",
        itemType: ItemType.Gun,
        cooldown: 100,
        switchCooldown: 500,
        recoilMultiplier: 0.75,
        recoilDuration: 150,
        fireMode: FireMode.Auto,
        shotSpread: 5,
        length: 10,
        fists: {
            left: v(65, 0),
            right: v(140, -5),
            animationDuration: 100
        },
        image: { position: v(120, 2) },
        capacity: Infinity,
        ballistics: {
            damage: 10,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 125
        }
    },
    {
        idString: "m3k",
        name: "M3K",
        itemType: ItemType.Gun,
        cooldown: 750,
        switchCooldown: 500,
        recoilMultiplier: 0.5,
        recoilDuration: 500,
        fireMode: FireMode.Single,
        shotSpread: 7,
        bulletCount: 9,
        length: 10,
        fists: {
            left: v(65, 0),
            right: v(130, -6),
            animationDuration: 100
        },
        image: { position: v(100, 3) },
        capacity: Infinity,
        ballistics: {
            damage: 6.5,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 80
        }
    },
    {
        idString: "m37",
        name: "Model 37",
        itemType: ItemType.Gun,
        cooldown: 1000,
        switchCooldown: 500,
        recoilMultiplier: 0.5,
        recoilDuration: 550,
        fireMode: FireMode.Single,
        shotSpread: 14,
        bulletCount: 10,
        length: 10,
        fists: {
            left: v(70, 0),
            right: v(130, -6),
            animationDuration: 100
        },
        image: { position: v(90, 0) },
        capacity: Infinity,
        ballistics: {
            damage: 10,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 64
        }
    },
    {
        idString: "mosin",
        name: "Mosin-Nagant",
        itemType: ItemType.Gun,
        cooldown: 1750,
        switchCooldown: 750,
        recoilMultiplier: 0.45,
        recoilDuration: 750,
        canQuickswitch: true,
        fireMode: FireMode.Single,
        shotSpread: 0,
        length: 9,
        fists: {
            left: v(75, 0),
            right: v(145, -1),
            animationDuration: 100
        },
        image: { position: v(105, 4) },
        capacity: Infinity,
        ballistics: {
            damage: 80,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 128
        }
    },
    {
        idString: "g19",
        name: "G19",
        itemType: ItemType.Gun,
        cooldown: 60,
        switchCooldown: 250,
        recoilMultiplier: 0.8,
        recoilDuration: 90,
        fireMode: FireMode.Auto,
        shotSpread: 20,
        length: 6,
        fists: {
            left: v(65, 0),
            right: v(70, 4),
            animationDuration: 100
        },
        image: { position: v(78, 0) },
        capacity: Infinity,
        ballistics: {
            damage: 5.5,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 60
        }
    },
    {
        idString: "saf200",
        name: "SAF-200",
        itemType: ItemType.Gun,
        cooldown: 80,
        switchCooldown: 300,
        recoilMultiplier: 0.75,
        recoilDuration: 750,
        fireMode: FireMode.Burst,
        shotSpread: 8,
        length: 9,
        fists: {
            left: v(65, 0),
            right: v(130, -6),
            animationDuration: 100
        },
        image: { position: v(100, 0) },
        capacity: Infinity,
        ballistics: {
            damage: 15,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 80
        },
        burstProperties: {
            shotsPerBurst: 3,
            burstCooldown: 500
        }
    },
    {
        idString: "deathray",
        name: "Death Ray",
        itemType: ItemType.Gun,
        cooldown: 20,
        switchCooldown: 500,
        recoilMultiplier: 1,
        recoilDuration: 0,
        fireMode: FireMode.Auto,
        shotSpread: 0,
        length: 12,
        fists: {
            left: v(65, 0),
            right: v(130, -6),
            animationDuration: 100
        },
        image: { position: v(100, 3) },
        capacity: Infinity,
        ballistics: {
            damage: 20,
            obstacleMultiplier: 5,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 80
        }
    }
];
