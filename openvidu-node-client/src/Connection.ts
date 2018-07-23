/*
 * (C) Copyright 2017-2018 OpenVidu (https://openvidu.io/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { OpenViduRole } from './OpenViduRole';
import { Publisher } from './Publisher';

/**
 * See [[Session.activeConnections]]
 */
export class Connection {

    /**
     * Identifier of the connection. You can call [[Session.forceDisconnect]] passing this property as parameter
     */
    connectionId: string;

    /**
     * Role of the connection
     */
    role: OpenViduRole;

    /**
     * Token associated to the connection
     */
    token: string;

    /**
     * Data associated to the connection on the server-side. This value is set with property [[TokenOptions.data]] when calling [[Session.generateToken]]
     */
    serverData: string;

    /**
     * Data associated to the connection on the client-side. This value is set with second parameter of method
     * [Session.connect](/api/openvidu-browser/classes/session.html#connect) in OpenVidu Browser
     */
    clientData: string;

    /**
     * Array of Publisher objects this particular Connection is publishing to the Session (each Publisher object has one Stream, uniquely
     * identified by its `streamId`). You can call [[Session.forceUnpublish]] passing any of this values as parameter
     */
    publishers: Publisher[] = [];

    /**
     * Array of streams (their `streamId` properties) this particular Connection is subscribed to. Each one always corresponds to one
     * Publisher of some other Connection: each string of this array must be equal to one [[Publisher.streamId]] of other Connection
     */
    subscribers: string[] = [];

    /**
     * @hidden
     */
    constructor(connectionId: string, role: OpenViduRole, token: string, serverData: string, clientData: string,
        publishers: Publisher[], subscribers: string[]) {
        this.connectionId = connectionId;
        this.role = role;
        this.token = token;
        this.serverData = serverData;
        this.clientData = clientData;
        this.publishers = publishers;
        this.subscribers = subscribers;
    }
}