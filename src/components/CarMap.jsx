import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { io } from "socket.io-client";
import L from 'leaflet';
import marker from '../assets/jujuCar.png';

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;

const myIcon = L.icon({
    iconUrl: marker,
    iconSize: [48, 48]
});

const CarMap = () => {
    const [carPositions, setCarPositions] = useState([]);

    useEffect(() => {
        const socket = io(SOCKET_SERVER_URL, {
            extraHeaders: {
                'App-id': '60e3f3d8b5e7c6a5d8f4b0c3',
            },
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            randomizationFactor: 0.5
        });

        socket.on('connect', () => {
            console.log('Connected to Websocket server');
        });

        socket.on('carPosition', (data) => {
            if (data.message.lat && data.message.lon) {
                setCarPositions((prevPositions) => {
                    const existingIndex = prevPositions.findIndex(car => car.plate === data.message.plate);
                    if (existingIndex >= 0) {
                        const updatedPositions = [...prevPositions];
                        updatedPositions[existingIndex] = {
                            lat: data.message.lat,
                            lon: data.message.lon,
                            brand: data.message.brand,
                            model: data.message.model,
                            year: data.message.year,
                            plate: data.message.plate,
                            speed: data.message.speed,
                            acceleration: data.message.acceleration,
                            mileage: data.message.mileage
                        };
                        return updatedPositions;
                    } else {
                        return [...prevPositions, {
                            lat: data.message.lat,
                            lon: data.message.lon,
                            brand: data.message.brand,
                            model: data.message.model,
                            year: data.message.year,
                            plate: data.message.plate,
                            speed: data.message.speed,
                            acceleration: data.message.acceleration,
                            mileage: data.message.mileage
                        }];
                    }
                });
            } else {
                console.error('Invalid car position data:', data.message);
            }
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from Websocket server');
        });

        return () => {
            socket.close();
        };
    }, []);

    return (
        <>
            <div className="flex gap-2">
                <h2 className="text-xl font-medium mb-4">Localisation en temps réel</h2>
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                </span>
            </div>
            <MapContainer center={[43.6, 1.43]} zoom={5} className="h-96 w-96 rounded-md">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {carPositions.map((car, index) => (
                    <Marker
                        key={index}
                        position={[car.lat, car.lon]}
                        icon={myIcon}
                    >
                        <Popup>
                            <div>
                                <h3>{car.brand} {car.model} ({car.year})</h3>
                                <p>Plaque: {car.plate}</p>
                                <p>Vitesse: {car.speed.toFixed(2)} km/h</p>
                                <p>Kilométrage: {car.mileage.toFixed(0)} km</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

export default CarMap;
