
package fitrack.achievement.client;

import fitrack.achievement.entity.dtos.UserRegularDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "user-service", url = "${application.config.usersRegular-url}")
public interface UserClient {

    @GetMapping("/board/{board-id}")
    List<UserRegularDTO> findAllUsersByBoard(@PathVariable("board-id") String boardId);
    @GetMapping("/id/{id}")
    UserRegularDTO getUserById(@PathVariable("id") String id);
}