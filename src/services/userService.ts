import * as userRepository from '../repositories/userRepository';
import { AddressData, AddressBody } from '../interfaces/userInterface';


export async function createAddress(userId: number, address: AddressBody){
    let street = await userRepository.findStreet(address.street);
    let district = await userRepository.findDistrict(address.district);
    if(!street) await userRepository.insertStreet(address.street);
    if(!district) await userRepository.insertDistrict(address.district);
    street = await userRepository.findStreet(address.street);
    district = await userRepository.findDistrict(address.district);

    await userRepository.insertAddress({
        street_id: street!.id,
        district_id: district!.id,
        number: address.number,
        user_id: userId,
        nickname: address.nickname
    });
}


export async function getAddresses(userId: number){
    return await userRepository.findAddresses(userId);
}