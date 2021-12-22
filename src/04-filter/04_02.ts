import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export function demolishHouseOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}