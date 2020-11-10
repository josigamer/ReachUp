import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_signin_button/button_builder.dart';
import 'package:flutter_signin_button/button_list.dart';
import 'package:flutter_signin_button/button_view.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'SignUp.view.dart';

class SignView extends StatelessWidget {
  String signInStatus;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      endDrawer: SignUp(),
      body: Container(
        decoration: BoxDecoration(
            image: DecorationImage(
                colorFilter: ColorFilter.mode(
                    Theme.of(context).colorScheme.secondaryVariant,
                    BlendMode.color),
                image: NetworkImage(
                    "https://media-cdn.tripadvisor.com/media/photo-s/11/98/7f/3e/photo3jpg.jpg"),
                fit: BoxFit.cover)),
        child: ClipRRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 3, sigmaY: 3),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                      padding: EdgeInsets.fromLTRB(0, 0, 0, 50),
                      child: Column(
                        children: [
                          Image.asset("assets/images/icons/launch/ReachUp.png",
                              width: 150),
                        ],
                      )),
                  SignInButton(
                    Buttons.Email,
                    text: "Entrar com E-mail",
                    onPressed: () {},
                  ),
                  SignInButtonBuilder(
                    icon: FontAwesomeIcons.google,
                    text: "Entrar com Google",
                    onPressed: () {},
                    backgroundColor: Color(0xFFCB1F27),
                  ),
                  SignInButton(
                    Buttons.Facebook,
                    text: "Entrar com Facebook",
                    onPressed: () {},
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(0, 10, 0, 10),
                    child: const Divider(
                      color: Colors.white,
                      height: 20,
                      thickness: 2,
                      indent: 50,
                      endIndent: 50,
                    ),
                  ),
                  Builder(
                    builder: (context) => SignInButtonBuilder(
                      text: 'Criar uma nova conta',
                      icon: Icons.account_circle,
                      onPressed: () => Scaffold.of(context).openEndDrawer(),
                      backgroundColor: Theme.of(context).colorScheme.primary,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}